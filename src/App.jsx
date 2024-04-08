import './App.css'
import AlertButton from './components/AlertButton'
import Form from './components/Form'
import Gallery from './components/Gallery'
import LightSwitch from './components/LightSwitch'
import SignUp from './components/SignUp'
import Toolbar from './components/Toolbar'
import Counter from './components/Counter'
import MovingDot from './components/MovingDot'
import FormChange from './components/FormChange'
import List from './components/List'
import ListRemove from './components/ListRemove'
import ListBetween from './components/ListBetween'
import CounterList from './components/CounterList'
import BucketList from './components/BucketList'

export default function App() {
  return (
    <>
      <AlertButton />
      <br />
      <br />
      <Toolbar />
      <br />
      <SignUp />
      <br />
      <LightSwitch />
      <br />
      <br />
      <Gallery />
      <br />
      <Form />
      <br />
      <Counter />
      <br />
      <MovingDot />
      <br />
      <FormChange />
      <br />
      <List />
      <br />
      <ListRemove />
      <br />
      <CounterList />
      <br />
      <ListBetween />
      <br />
      <BucketList />
    </>
  )
} 