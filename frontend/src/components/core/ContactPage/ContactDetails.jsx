import React from "react"
import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Nhắn tin cho chúng tôi",
    description: "Bộ phận hỗ trợ khách hàng của chúng tôi sẵn sàng giúp đỡ bạn.",
    details: "info@studyhub.com",
  },
  {
    icon: "BiWorld",
    heading: "Văn phòng",
    description: "Địa chỉ văn phòng của chúng tôi",
    details:
      "Hà Nội, Việt Nam - 123 Đường ABC, Quận XYZ, TP Hà Nội",
  },
  {
    icon: "IoCall",
    heading: "Liên hệ qua điện thoại",
    description: "Thứ hứ Hai đến Thứ Sáu, 9:00 sáng - 6:00 chiều",
    details: "+123 456 7869",
  },
]


const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
            key={i}
          >
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} />

              <h1 className="text-lg font-semibold text-richblack-5">
                {ele?.heading}
              </h1>
            </div>

            <p className="font-medium">{ele?.description}</p>
            <p className="font-semibold">{ele?.details}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ContactDetails