import { FC, useContext } from "react"
import { FileUploadContext } from "@/page/App/components/InspectPanel/PanelSetters/DriveSourceGroupSetter/provider/FileUploadProvider"
import { getUploadModeInfo } from "@/page/App/components/InspectPanel/PanelSetters/DriveSourceGroupSetter/utils"
import { uploadContainerStyle, uploadIconStyle, uploadNameStyle } from "./style"

interface UploadModeProps {
  widgetType: string
}
const UploadMode: FC<UploadModeProps> = ({ widgetType }) => {
  const placeholderInfo = getUploadModeInfo(widgetType)

  const { setUploadModalVisible, uploadName, isUpLoading } =
    useContext(FileUploadContext)

  return (
    <div
      css={uploadContainerStyle(isUpLoading)}
      onClick={() => setUploadModalVisible(true)}
    >
      <span css={uploadIconStyle}>{placeholderInfo?.icon}</span>
      <span css={uploadNameStyle}>{uploadName || placeholderInfo?.name}</span>
    </div>
  )
}

export default UploadMode
