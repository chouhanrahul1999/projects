interface SubHeadingProps {
  label: string;
}

export const SubHeading = (props: SubHeadingProps) => {
    return <div className="text-gray-400 text-md p-2 max-w-xs text-center">
        {props.label}
    </div>
}