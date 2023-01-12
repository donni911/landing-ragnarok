const checkboxes = document.querySelectorAll(".checkbox")

const checkboxesRequirements = {
  requirements: ["minimum", "recommended"],
  versions: ["standart", "limited"],
}
const handleCheckbox = ({ currentTarget: { checked, name } }) => {
  const value = checkboxesRequirements[name][Number(checked)]

  const list = document.getElementById(value)
  const tabs = document.querySelectorAll(`[data-${name}]`)
  const siblings = list.parentElement.children

  for (const item of siblings) {
    item.classList.remove("active")
  }

  for (const tab of tabs) {
    tab.classList.remove("active")
    tab.dataset[name] === value && tab.classList.add("active")
  }

  list.classList.add("active")
}

checkboxes.forEach((box) => box.addEventListener("click", handleCheckbox))
