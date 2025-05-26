interface HeadingProps {
  label: string;
}

export const Heading = (props: HeadingProps) => {
  return <div className="font-semibold text-3xl font-sans">{props.label}</div>;
};
