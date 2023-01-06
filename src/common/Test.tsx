import './Test.css';
import SuperInputText from "./superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "./superComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "./superComponents/c3-SuperCheckbox/SuperCheckbox";
import SuperSelect from "./superComponents/c5-SuperSelect/SuperSelect";
import SuperRange from "./superComponents/c7-SuperRange/SuperRange";
import SuperRadio from "./superComponents/c6-SuperRadio/SuperRadio";

export function Test() {
    return <div className="test">
        <SuperInputText/>
        <SuperButton>Button</SuperButton>
        <SuperCheckbox/>
        <SuperSelect/>
        <SuperRange/>
        <SuperRadio/>


        {/*<SuperEditableSpan/>*/}
        {/*<SuperDebouncedInput />*/}
        {/*<SuperPagination page={1} itemsCountForPage={4} totalCount={15} onChange={() => {}} />
        <SuperSort sort={'up'} value={'sort'} onChange={() => {}} />*/}
    </div>;
}