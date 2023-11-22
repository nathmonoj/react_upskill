export default function PropsCalc({ num1, num2 }) {
  return (
    <div>Calculated Sum :: {num1 && num2 && num1 + num2}</div>
  )
}
