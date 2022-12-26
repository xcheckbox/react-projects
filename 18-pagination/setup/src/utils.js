const paginate = (users) => {
  const ITEM_PER_PAGE = 10;
  const PAGE_SIZE = Math.ceil(users.length / ITEM_PER_PAGE);

  const splitUsers = (array, fromIndex, toIndex) =>{
    return array.slice(fromIndex, toIndex)
  }

  const userPages = Array.from({ length: PAGE_SIZE}, (_, idx) => {
    const from = idx * ITEM_PER_PAGE;
    const to = from + PAGE_SIZE;

    return splitUsers(users, from, to);
  })

  return userPages;

}

export default paginate
