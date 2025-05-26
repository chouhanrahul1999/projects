interface SubHeadingProps {
  label: string;
}

export const SubHeading = (props: SubHeadingProps) => {
    return <div className="text-gray-600 text-md px-2 pt-2 max-w-72 text-center">
        {props.label}
    </div>
}