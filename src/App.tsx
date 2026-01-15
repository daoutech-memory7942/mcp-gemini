import Btn from './components/Button';
import Toggle from './components/Toggle';
import Input from './components/Input';
import Select from './components/Select';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Toast from './components/Toast';

function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Button component</h1>
      <div className="flex flex-wrap gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Primary</h2>
          <div className="flex gap-4">
            <Btn type="primary" state="normal" />
            <Btn type="primary" state="hover" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Secondary</h2>
          <div className="flex gap-4">
            <Btn type="secondary" state="normal" />
            <Btn type="secondary" state="hover" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Normal</h2>
          <div className="flex gap-4">
            <Btn type="normal" state="normal" />
            <Btn type="normal" state="hover" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Ghost</h2>
          <div className="flex gap-4">
            <Btn type="ghost" state="normal" />
            <Btn type="ghost" state="hover" />
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mt-8 mb-4">Toggle component</h1>
      <div className="flex flex-col gap-4">
        <Toggle state="normal" toggle={false} />
        <Toggle state="normal" toggle={true} />
        <Toggle state="disabled" toggle={false} />
        <Toggle state="disabled" toggle={true} />
      </div>
      <h1 className="text-2xl font-bold mt-8 mb-4">Input component</h1>
      <div className="flex flex-col gap-4">
        <Input state="normal" errorMsg={false} />
        <Input state="hover" errorMsg={false} />
        <Input state="error" errorMsg={true} />
        <Input state="hover" errorMsg={true} />
      </div>
      <h1 className="text-2xl font-bold mt-8 mb-4">Select component</h1>
      <div className="flex flex-col gap-4">
        <Select state="normal" />
        <Select state="hover" />
      </div>
      <h1 className="text-2xl font-bold mt-8 mb-4">Checkbox component</h1>
      <div className="flex flex-col gap-4">
        <Checkbox state="normal" disabled={false} />
        <Checkbox state="hover" disabled={false} />
        <Checkbox state="check" disabled={false} />
        <Checkbox state="normal" disabled={true} />
        <Checkbox state="check" disabled={true} />
      </div>
      <h1 className="text-2xl font-bold mt-8 mb-4">Radio component</h1>
      <div className="flex flex-col gap-4">
        <Radio state="normal" disabled={false} />
        <Radio state="hover" disabled={false} />
        <Radio state="check" disabled={false} />
        <Radio state="normal" disabled={true} />
        <Radio state="check" disabled={true} />
      </div>
      <h1 className="text-2xl font-bold mt-8 mb-4">Search component</h1>
      <div className="flex flex-col gap-4">
        <Search state="normal" />
        <Search state="hover" />
      </div>
      <h1 className="text-2xl font-bold mt-8 mb-4">Dropdown component</h1>
      <div className="flex flex-col gap-4">
        <Dropdown />
      </div>
      <h1 className="text-2xl font-bold mt-8 mb-4">Toast component</h1>
      <div className="flex flex-col gap-4">
        <Toast type="success" />
        <Toast type="fail" />
      </div>
    </div>
  );
}

export default App;
