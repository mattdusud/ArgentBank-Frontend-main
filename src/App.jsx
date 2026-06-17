import { Routes, Route, } from 'react-router-dom'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import './App.css'
import Signin from './pages/Signin/Signin'
import Layout from './components/Layout/Layout'
import User from './pages/User/User'
import { Provider } from 'react-redux'
import { store } from './redux.js'

export default function App() {

  return (
    <Provider store={store}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Provider>
  )
}