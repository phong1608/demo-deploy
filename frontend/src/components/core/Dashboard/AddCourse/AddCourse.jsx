import { useEffect } from "react";
import RenderSteps from "./RenderSteps"



export default function AddCourse() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="flex w-full items-start gap-x-6">

      <div className="flex flex-1 flex-col">
        <h1 className="mb-14 text-3xl font-medium text-richblack-5 font-boogaloo text-center lg:text-left">
         Thêm khóa học
        </h1>

        <div className="flex-1">
          <RenderSteps />
        </div>
      </div>

      {/* Course Upload Tips */}
      <div className="sticky top-10 hidden lg:block max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 ">
        <p className="mb-8 text-lg text-richblack-5">⚡ Course Upload Tips</p>

        <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
          <li>Thêm giá khóa học hoặc làm khóa học miễn phí</li>
          <li>Ảnh thu nhỏ được khuyến khích có kích thước khoảng 1024x1024</li>
          <li>Phần Video điều khiển video tổng quan của khóa học.</li>
          <li>Course Builder là nơi bạn tạo và tổ chức khóa học.</li>
          <li>Thêm Chủ đề trong phần Course Builder để tạo bài học, bài kiểm tra và bài tập.</li>
          <li>Thông tin từ phần Dữ liệu bổ sung sẽ hiển thị trên trang chi tiết khóa học.</li>
          <li>Tạo Thông báo để thông báo các nội dung quan trọng.</li>
          <li>Gửi Ghi chú đến tất cả học viên đã đăng ký cùng lúc.</li>

        </ul>
      </div>
    </div>
  )
}