import { getStoredCart } from "./FakeDb"

const DbJobsData = async () => {
  const jobsData = await fetch('/Jobs.json')
  const jobs = await jobsData.json()

  const savedCart = getStoredCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundCart = jobs.find(product => product.id === id)
    if (foundCart) {
      const quantity = savedCart[id]
      foundCart.quantity = quantity
      initialCart.push(foundCart)
    }
  }

  return { jobs, initialCart }
}
export default DbJobsData;