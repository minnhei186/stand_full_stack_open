import Part from './Part.jsx'

const Content = (props) => {
    return (
        <div>
        <Part part={props.part1.text} exercise={props.part1.exercise} />
        <Part part={props.part2.text} exercise={props.part2.exercise} />
        <Part part={props.part3.text} exercise={props.part3.exercise} />
        </div>
    )
}

export default Content