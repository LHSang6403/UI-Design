import { create } from "zustand";

interface HistoryProps {
  item: {
    id: string;
    name: string;
    image: string;
    items: {
      name: string;
      quantity: number;
      selectedOptions: string[];
      speacialRequest: string;
      price: number;
      image: string;
    }[];
    eatClean: boolean;
    vegetarian: boolean;
    orderDateTime: string;
    deliveryDateTime: string;
    estimatedTotal: number;
    address: string;
    status: string;
    driver: {
      name: string;
      phone: string;
    };
    deliveryFee: number;
    discount: number;
    tax: number;
    total: number;
    paymentMethod: {
      name: string;
      cardNumber: string;
    };
  };
  setItem: (item: HistoryProps["item"]) => void;
}

const useHistory = create<HistoryProps>((set) => ({
  item: {
    id: "",
    name: "",
    image: "",
    items: [],
    eatClean: false,
    vegetarian: false,
    orderDateTime: "",
    deliveryDateTime: "",
    estimatedTotal: 0,
    address: "",
    status: "",
    driver: {
      name: "",
      phone: "",
    },
    deliveryFee: 0,
    discount: 0,
    tax: 0,
    total: 0,
    paymentMethod: {
      name: "",
      cardNumber: "",
    },
  },
  setItem: (item) => {
    set({ item });
  },
}));

export default useHistory;
