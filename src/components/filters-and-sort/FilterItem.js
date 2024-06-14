import { Checkbox } from "antd";

const FilterItem = ({
  filtersList,
  checkboxesRefs,
  filtersArr,
  filterFunction,
  filterKey,
  title,
}) => {
  const onChangeFilter = () => {
    filtersArr[filterKey] = [];
    checkboxesRefs.current[filterKey].map((el) => {
      el.input.checked === true && filtersArr[filterKey].push(el.input.name);
    });
    filterFunction();
  };
  return (
    <div>
      <p className="title">{title}</p>
      {filtersList.map((element) => {
        let index = element.key;
        return (
          <div key={element.id} className="checkbox-item">
            <Checkbox
              key={element.name}
              ref={(element) =>
                (checkboxesRefs.current[filterKey][index] = element)
              }
              id={element.id}
              name={element.id}
              onChange={onChangeFilter}
            />
            <label htmlFor={element.id}>{element.name}</label>
          </div>
        );
      })}
    </div>
  );
};
export default FilterItem;
