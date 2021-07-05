let p = [1, 2, 3]
console.log(p.forEach((element) => element + 1))

const createManagerList = () => {
  let managerList = []
  employees.forEach((element) => {
    for (let i = 0; i <= element.managers.length; i += 1) {
      if (managerList.includes(element.managers[i] === false)) {
        managerList.push(element.managers[i])
      }
    }
  })
  return managerList
}