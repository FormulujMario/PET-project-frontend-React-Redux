import { Checkbox } from 'antd';

const FilterItem = ({
  filtersList,
  section,
  filtersArr,
  filterFunction,
  filterKey,
  title,
}) => {
  const onChangeFilter = () => {
    filtersArr[filterKey] = [];
    const checked = document.querySelectorAll(
      `.${filterKey}-${section} input:checked`
    );
    Array(...checked).map((inputChecked) => {
      return filtersArr[filterKey].push(inputChecked.name);
    });
    filterFunction();
  };

  return (
    <div className={`${filterKey} ${filterKey}-${section}`}>
      <p className="title">{title}</p>
      {filtersList.map((element) => {
        return (
          <div className='checkbox-item'>
            <Checkbox
              id={element.id}
              name={element.id}
              onChange={onChangeFilter}
            />
            <label for={element.id}>{element.name}</label>
          </div>
        );
      })}
    </div>
  );
};
export default FilterItem;
