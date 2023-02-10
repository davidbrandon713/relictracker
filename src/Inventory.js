export const relicInventory = [
  {
    name: 'Neo S13 Relic',
    dropped: [
      0,
      0,
      0,
      0,
      0,
      0
    ]
  },
  {
    name: 'Neo K3 Relic',
    dropped: [
      0,
      0,
      0,
      0,
      0,
      0
    ]
  },
  {
    name: 'Axi A7 Relic',
    dropped: [
      0,
      0,
      0,
      0,
      0,
      0
    ]
  }
]
  

export const updateInventory = (name, array) => {
  const temp = relicInventory.filter(x => !x.name.includes(name));
  console.log(temp)
  relicInventory.push(array);
}




