import { colors } from "../../../shared/theme"

const IconTrashDesktop = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill={colors.blue[200]}
      d="M1.286 16c0 1.1 1.157 2 2.571 2h10.286c1.414 0 2.571-.9 2.571-2V4H1.286v12ZM18 1h-4.5l-1.286-1H5.786L4.5 1H0v2h18V1Z"
    />
  </svg>
)
export default IconTrashDesktop
