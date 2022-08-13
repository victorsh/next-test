function About({ test }) {
  return (
    <div>
      {Object.values(test).map((value, index) => {
        return Object.values(value).map((val, idx) => {
          return (
            <div key={index}>
              <div>{val}</div>
              <hr />
            </div>
          )
        })
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  console.log('Runs in Server')
  return {
    props: {
      test: {
        'dd1': {
          'ed1': 'hi1'
        },
        'dd2': {
          'ed2': 'hi2'
        }
      }
    }
  }
}

export default About
