import React from "react";
import "../../styles/Style.css";
import state1 from "../../asset/images/state1.png";
import state2 from "../../asset/images/state2.png";
import { Image } from "antd";
function StateExample() {
  return (
    <>
      <div>
        <span className="title">1. State là gì</span>
        <p className="content">
          State đại diện cho giá trị của một thuộc tính động của một thành phần
          React tại một phiên bản nhất định. React cung cấp một kho dữ liệu động
          cho mỗi thành phần. Dữ liệu nội bộ đại diện cho trạng thái của một
          thành phần React và có thể được truy cập bằng cách sử dụng biến thành
          viên this.state của thành phần đó. Bất cứ khi nào trạng thái của thành
          phần bị thay đổi, thành phần sẽ tự kết xuất lại bằng cách gọi phương
          thức render () cùng với trạng thái mới.
        </p>
        <span className="title">2. State Management API</span>
        <p className="content">
          React cung cấp một API duy nhất để duy trì trạng thái trong thành
          phần. API là this.setState () . Nó chấp nhận một đối tượng JavaScript
          hoặc một hàm trả về một đối tượng JavaScript.
        </p>
        <p className="content">
          Ký hiệu setState API với chức năng tương tự như sau:
          <Image width={500} src={state1}></Image>
          <p>
            Ở đây, <br></br>
            <i>state</i> đề cập đến trạng thái hiện tại của thành phần React{" "}
            <br></br>
            <i>props</i> đề cập đến các thuộc tính hiện tại của thành phần
            React.
          </p>
        </p>
        <p className="content">
          React khuyến nghị sử dụng setState API với chức năng vì nó hoạt động
          chính xác trong môi trường không đồng bộ. Thay vì hàm lambda, hàm
          JavaScript bình thường cũng có thể được sử dụng<br></br>
          <Image width={500} src={state2}></Image>
        </p>
        <p className="content">
          React State không nên được sửa đổi trực tiếp thông qua biến thành viên
          this.state và việc cập nhật trạng thái thông qua biến thành viên sẽ
          không hiển thị lại thành phần. <br></br>Điểm đặc biệt của API trạng
          thái React là nó sẽ được hợp nhất với trạng thái hiện có thay vì thay
          thế trạng thái. Ví dụ: chúng ta có thể cập nhật bất kỳ một trong các
          trường trạng thái tại một thời điểm thay vì cập nhật toàn bộ đối
          tượng. Tính năng này mang lại cho nhà phát triển sự linh hoạt để dễ
          dàng xử lý dữ liệu trạng thái. <br></br>Điểm đặc biệt của API trạng
          thái React là nó sẽ được hợp nhất với trạng thái hiện có thay vì thay
          thế trạng thái. Ví dụ: chúng ta có thể cập nhật bất kỳ một trong các
          trường trạng thái tại một thời điểm thay vì cập nhật toàn bộ đối
          tượng. Tính năng này mang lại cho nhà phát triển sự linh hoạt để dễ
          dàng xử lý dữ liệu trạng thái
        </p>

        <span className="title">3. State ReactJS - Layout in Component</span>
        <p className="content">
          Một trong những tính năng nâng cao của React là nó cho phép nội dung
          giao diện người dùng (UI) tùy ý được truyền vào thành phần bằng cách
          sử dụng các thuộc tính. So với thuộc tính con đặc biệt của React, chỉ
          cho phép một nội dung giao diện người dùng duy nhất được truyền vào
          thành phần, tùy chọn này cho phép nhiều nội dung giao diện người dùng
          được chuyển vào thành phần. Tùy chọn này có thể được xem như một phần
          mở rộng của children property.
        </p>
      </div>
    </>
  );
}
export default StateExample;
