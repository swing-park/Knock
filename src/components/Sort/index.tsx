import { FormControl, Select, MenuItem } from "@mui/material";
import styled from "styled-components";
import { SortItem } from "types";

interface Props {
  sortItems: SortItem[];
  sort: string;
  setSort: (sort: string) => void;
}

const Sort = ({ sortItems, sort, setSort }: Props) => {
  return (
    <ControlForm >
      <Select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        displayEmpty
      >
        <Opsiton value="">
          <em>-- 정렬 --</em>
        </Opsiton>
        {sortItems.map((item) => (
          <Opsiton
            key={item.itemValue}
            onClick={item.handler}
            value={item.itemValue}
          >
            {item.itemValue}
          </Opsiton>
        ))}
      </Select>
    </ControlForm>
  );
};

export default Sort;
const ControlForm = styled(FormControl)`
&& {
  width: 150px;
  background: ${(props) => props.theme.bgColor};
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.05);
}
`;
const SelectBox = styled(Select)``;
const Opsiton = styled(MenuItem)`
  padding:0;
`;
