import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log('logged in', authUser)
        dispatch(login({
          uid: authUser.uid,
          email: authUser.email,
        }))
      }
      else {
        console.log('logged out')
        dispatch(logout())
      }
    })
    return () => {
      unsubscribe()
    }
  }, [dispatch])

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {!user ?
            (<Route path='/*' element={<Login />} />
            ) :
            (<Route path='/'>
              <Route index element={<HomeScreen />} />
              <Route path='profile' element={<ProfileScreen />} />
            </Route>)}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
