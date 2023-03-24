export const relicInventory = [
  {
    name: 'Neo S13',
    id: 'neoS13',
    data: [
      0,
      0,
      0,
      0,
      0,
      0
    ]
  },
  {
    name: 'Neo K3',
    id: 'neoK3',
    data: [
      0,
      0,
      0,
      0,
      0,
      0
    ]
  },
  {
    name: 'Axi A7',
    id: 'axiA7',
    data: [
      6,
      2,
      0,
      11,
      4,
      7
    ]
  }
]

export const updateInventory = (relicId, array) => {
  const temp = relicInventory.filter(x => !x.id.includes(relicId));
  console.log(temp)
  relicInventory.push(array);
}
