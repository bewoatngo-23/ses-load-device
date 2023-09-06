import React from "react";
import "../../styles/Style.css";
function LifeCycleEx() {
  return (
    <>
      <h1>LifeCycle Example and Method</h1>
      <span className="title">1.Component Lifecycle</span>
      <p className="content">
        Là một loạt các thay đổi mà component trải qua từ khi tạo ra cho tới khi
        kết thúc
      </p>
      <span className="title">2.Method UNSAFE_componentWillMount()</span>
      <p className="content">
        Được gọi trước khi react gọi phương thức render() để vẽ lên giao diện
        lần đầu tiên. Phương thức này có thể thực thi cả 2 phía server và client
      </p>
      <span className="title">3.Method componentDidMount()</span>
      <p className="content">
        Được gọi khi component đã được render lên giao diện 1 lần. Có thể truy
        cập vào NativeUI (DOM,UIView...) để xử lý. Bạn có thể gọi đến một thư
        viện Javascript khác trong phương thức này.
      </p>
      <p className="content">
        Phương thức này cũng có thể là nơi để bạn sử dụng AJAX lấy dữ liệu từ
        server sau đó gọi setState để thay đổi trạng thái của component, nếu
        thành công component sẽ render thêm 1 lần nữa.
      </p>
    </>
  );
}
export default LifeCycleEx;
