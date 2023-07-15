import {
  action,
  IObservableValue,
  makeObservable,
  observable,
  toJS,
} from "mobx";
import { MONTHS } from "../constants";
import { FactoryAxisData, FactoryData, Product } from "../types";

const API = {
  fetch: `${process.env.REACT_APP_API_URL}/products`
}

class BaseStore {
  data: FactoryData[] = observable.array([]);

  constructor() {
    makeObservable(this, {
      data: observable,
      fetchInfo: action,
    });
  }

  public getSortedBy = (type: Product, id: number) => {
    const arr: FactoryAxisData[] = Array.from({ length: 12 }, (_, index) => ({y: 0, x: MONTHS[index], factoryId: id}))
    const filtered = this.data.filter(i => i.factory_id === id)

    for (let i = 0; i < filtered.length; i++) {
      const index = +filtered[i].date.split("/")[1] - 1;

      arr[index] = {
        ...arr[index],
        y: arr[index].y + filtered[i][type],
      }
    }

    return arr;
  }

  private validateAndStore = (arr: FactoryData[]) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].date) {
        this.data.push(arr[i]);
      }
    }
  }

  public fetchInfo = async () => {
    try {
      const resp = await fetch(API.fetch);
      const info: FactoryData[] = await resp.json();
      this.validateAndStore(info);
    } catch (err) {
      console.log(err);
    }
  };
}

const Store = new BaseStore();
export default Store;
