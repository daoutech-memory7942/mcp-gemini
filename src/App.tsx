import Button from './components/Button';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="grid grid-cols-2 gap-4">
        <Button type="primary" state="normal" />
        <Button type="primary" state="hover" />
        <Button type="secondary" state="normal" />
        <Button type="secondary" state="hover" />
        <Button type="normal" state="normal" />
        <Button type="normal" state="hover" />
        <Button type="ghost" state="normal" />
        <Button type="ghost" state="hover" />
      </div>
    </div>
  )
}

export default App;
