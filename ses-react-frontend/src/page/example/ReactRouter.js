import { Image } from "antd";
import React from "react";
function ReactRouterExample() {
  return (
    <>
      <h1>ReactRouterExample Example</h1>
      <div>
        <span className="title">1.React Router là gì?</span>
        <p className="content">
          React Router là một thư viện định tuyến (routing) tiêu chuẩn trong
          React. Nó giữ cho giao diện của ứng dụng đồng bộ với URL trên trình
          duyệt. React Router cho phép bạn định tuyến "luồng dữ liệu"(data flow)
          trong ứng dụng của bạn một cách rõ ràng. Nó tương đương với sự khẳng
          định, nếu bạn có URL này, nó sẽ tương đương với Route (tuyến đường)
          này, và giao diện sẽ thế này!
        </p>
        <p className="content">
          React Router thực sự có ích và được sử dụng rộng rãi trong các ứng
          dụng React tại phía Server hơn là các ứng dụng React tại phía Client.
          Cụ thể là React Router thường được sử dụng trong ứng dụng React trong
          môi trường NodeJS Server, nó cho phép bạn định nghĩa ra các URL động
          nhưng phù hợp với triết lý "Single Page Application" (Ứng dụng một
          trang) của React. Phát triển một ứng dụng React bạn cần viết nhiều
          Component nhưng chỉ cần duy nhất một tập tin để phục vụ người dùng đó
          là index.html
        </p>
        <p className="d-flex justify-content-center">
          <Image
            width={1000}
            src="https://s1.o7planning.com/vi/12137/images/26763049.png"
          />
        </p>
      </div>
      <div>
        <span className="title">2. Sử dụng react router ở client</span>
        <p className="content">
          Được sử dụng ở trong project file Router.js và App.js
        </p>
      </div>
    </>
  );
}
export default ReactRouterExample;
