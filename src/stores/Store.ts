import {
  action,
  makeObservable,
  observable,
} from "mobx";
import { MONTHS } from "../constants";
import { FactoryAxisData, FactoryData, PieChartData, Product, Status } from "../types";
import { convertToTons } from "../utils";

const API = {
  fetch: `${process.env.REACT_APP_API_URL}/products`
}

class BaseStore {
  data: FactoryData[] = observable.array([]);
  private status: Status = Status.Empty;

  constructor() {
    makeObservable(this, {
      data: observable,
      fetchInfo: action,
    });
  }

  public getPieChartFor = (factoryId: number, month: number, productCount: number = 3): PieChartData[] => {
    const filtered = this.data.filter(i => i.factory_id === factoryId && +i.date.split("/")[1] === month);

    const result = filtered.reduce(
      (acc, data) => {
        acc[0].y += convertToTons(data.product1);
        acc[1].y += convertToTons(data.product2);
        acc[2].y += convertToTons(data.product3);
        return acc;
      },
      [{ y: 0 }, { y: 0 }, { y: 0 }]
    );

    for (let i = 0; i < result.length; i++) {
      result[i].y = Math.round(result[i].y);
    }

    return result;
  }

  public getBarChartFor = (type: Product, id: number) => {
    const arr: FactoryAxisData[] = Array.from(
      { length: 12, },
      (_, index) => ({ y: 0, x: MONTHS[index], factoryId: id })
    );

    const filtered = this.data.filter(i => i.factory_id === id)

    for (let i = 0; i < filtered.length; i++) {
      const index = +filtered[i].date.split("/")[1] - 1;

      arr[index] = {
        ...arr[index],
        y: arr[index].y + convertToTons(filtered[i][type]),
      }
    }

    return arr
  }

  private validateAndStore = (arr: FactoryData[]) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].date) {
        this.data.push(arr[i]);
      }
    }
  }

  public fetchInfo = async () => {
    if (this.status === Status.Full) return;

    try {
      const resp = await fetch(API.fetch);
      const info: FactoryData[] = await resp.json();
      this.validateAndStore(info);
      this.status = Status.Full;
    } catch (err) {
      console.log(err);
    }
  };
}

const Store = new BaseStore();
export default Store;
