import S3MDataLoadFrame1 from "../components/S3MDataLoadFrame1";
import S3MDataLoadFrame2 from "../components/S3MDataLoadFrame2";
import {
  ADD_PRODUCT,
  ADD_TAB,
  ADD_TAB2,
  Edit_PRODUCT,
  REMOVE_TAB,
  REMOVE_TAB2,
  Remove_PRODUCT,
  UPDATE_NAME_TAB,
  UPDATE_NAME_TAB2,
  UPDATE_STATUS,
  UPDATE_STATUS2,
} from "./Constants";

const initState = {
  products: [{ id: 1, name: "Kien" }],
  frame1: [
    {
      label: "Frame 1",
      children: <S3MDataLoadFrame1 data={"0"} />,
      key: "0",
      status: false,
    },
  ],
  frame2: [
    {
      label: "Frame2 1",
      children: <S3MDataLoadFrame2 data={"0"} />,
      key: "0",
      status: false,
    },
  ],
};

function retucer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log("Xu ly add");
      return { ...state, products: [...state.products, action.payload] };
    case Remove_PRODUCT:
      console.log("remove");
      return {
        ...state,
        products: state.products.filter((a) => a.id != action.payload.id),
      };
    case Edit_PRODUCT:
      state.products.filter((a) => a.id == action.payload.id)[0].name =
        action.payload.name;
      return state;
    case ADD_TAB:
      console.log("Xu ly add");
      console.log(action.payload);
      return {
        ...state,
        frame1: [...state.frame1, action.payload],
      };
    case REMOVE_TAB:
      console.log("remove");
      return {
        ...state,
        frame1: state.frame1.filter((a) => a.key != action.payload),
      };
    case UPDATE_STATUS:
      state.frame1.filter((a) => a.key == action.payload.key)[0].status =
        action.payload.status;
      return state;
    case UPDATE_NAME_TAB:
      state.frame1.filter((a) => a.key == action.payload.key)[0].label =
        action.payload.name;
      return state;

    case ADD_TAB2:
      console.log("Xu ly add");
      console.log(action.payload);
      return {
        ...state,
        frame2: [...state.frame2, action.payload],
      };
    case REMOVE_TAB2:
      console.log("remove");
      return {
        ...state,
        frame2: state.frame2.filter((a) => a.key != action.payload),
      };
    case UPDATE_STATUS2:
      state.frame2.filter((a) => a.key == action.payload.key)[0].status =
        action.payload.status;
      return state;
    case UPDATE_NAME_TAB2:
      state.frame2.filter((a) => a.key == action.payload.key)[0].label =
        action.payload.name;
      return state;

    default:
      return state;
  }
}
export { initState };
export default retucer;
