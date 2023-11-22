import PropsCalc from "./PropsCalc"
/* const property = {
  propertyOne: 'propertyOne',
  propertyTwo: 'propertyTwo',
  propertyThree: 'propertyThree',
  propertyFour: 'propertyThree'
}

const { propertyOne, propertyTwo, ...restProps } = property
console.log('restProps::', restProps) */


export default function PropsRenderComponent({ propertyOne, propertyTwo, ...restProps }) {

  console.log('proppropertyOne::', propertyOne)
  console.log('propertyTwo::', propertyTwo)
  console.log('restProperties::', restProps)

  return (

    <div className="props-component">
      <div>
        PropsRenderComponent
      </div>
      <PropsCalc num1={2} num2={3} />
      <PropsCalc num1={4} num2={3} />
    </div>
  )
}
