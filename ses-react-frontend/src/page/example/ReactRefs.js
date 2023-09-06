import { Button, Card } from "antd";
import React from "react";
function ReactRefsEx() {
  return (
    <>
      <h1>React refs Example</h1>
      <div>
        <span className="title">1. React Refs</span>
        <p className="content">
          Refs được sử dụng để bạn tham chiếu (reference) tới một phần tử. Về cơ
          bản nên tránh sử dụng refs trong hầu hết các trường hợp. Tuy nhiên nó
          có ích khi bạn muốn truy cập vào các nút (node) của DOM hoặc các phần
          tử được tạo ra trong phương thức render()
        </p>
        <span className="title">React.createRef()</span>
        <p className="content">
          Sử dụng phương thức React.createRef() để tạo Refs, sau đó đính
          (attach) nó vào các phần tử (Được tạo ra trong render() ) thông qua
          thuộc tính ref.
        </p>
        <p className="content">
          Khi mà một Ref được đính (attach) vào một phần tử được tạo ra trong
          phương thức render(). Bạn có thể tham chiếu tới đối tượng Node của
          phần tử này thông qua thuộc tính current của Ref.
        </p>
        <div className="mb-3 ms-5">
          <Card
            bordered={false}
            style={{
              width: 500,
              backgroundColor: "#f5f5f5",
            }}
          >
            <p>const node = this.myRef.current;</p>
          </Card>
        </div>
        <span className="title">Ví dụ</span>
        <div className="ms-5">
          <Card
            title={"React refs"}
            bordered={false}
            style={{
              width: 500,
            }}
          >
            <SearchBox />
          </Card>
        </div>
      </div>
    </>
  );
}
class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "reactjs",
    };
    this.searchFieldRef = React.createRef();
  }

  clearAndFocus() {
    this.setState({ searchText: "" });
    // Focus to Input Field.
    this.searchFieldRef.current.focus();
    this.searchFieldRef.current.style.background = "#e8f8f5";
  }

  changeSearchText(event) {
    var v = event.target.value;
    this.setState((prevState, props) => {
      return {
        searchText: v,
      };
    });
  }

  render() {
    return (
      <div className="search-box">
        <input
          value={this.state.searchText}
          ref={this.searchFieldRef}
          onChange={(event) => this.changeSearchText(event)}
        />
        <Button className="ms-2" onClick={() => this.clearAndFocus()}>
          Clear And Focus
        </Button>

        <a className="ms-2" href="">
          Reset
        </a>
      </div>
    );
  }
}
export default ReactRefsEx;
