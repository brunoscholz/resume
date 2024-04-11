export async function getData() {
  try {
    // const response = await fetch('/data.json')
    const response = await fetch('https://raw.githubusercontent.com/brunoscholz/brunoscholz/master/data.json')
    return await response.json()
  } catch(e) {
    return e
  }
}
