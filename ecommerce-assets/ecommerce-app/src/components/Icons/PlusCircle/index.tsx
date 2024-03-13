import { colors } from "../../../shared/theme"

const IconPLusCircle = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <path
            fill={colors.blue[200]}
            d="M9.9 4.5H8.1v3.6H4.5v1.8h3.6v3.6h1.8V9.9h3.6V8.1H9.9V4.5ZM9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9Zm0 16.2c-3.969 0-7.2-3.231-7.2-7.2 0-3.969 3.231-7.2 7.2-7.2 3.969 0 7.2 3.231 7.2 7.2 0 3.969-3.231 7.2-7.2 7.2Z"
        />
    </svg>
)
export default IconPLusCircle
