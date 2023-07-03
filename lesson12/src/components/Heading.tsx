import { ReactElement } from 'react'

type HeadingProps = { title: string }

//If we returns just an element we can specifically say ReactElement
const Heading = ({ title }: HeadingProps): ReactElement => {
    return <h1>{title}</h1>
};

export default Heading;