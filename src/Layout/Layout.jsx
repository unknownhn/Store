import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Drawer from '../components/layout/Drawer';



const Layout = () => {
  return (
   <div>
     <div className='navbar'>
      <ul className='flex gap-[20px] items-center px-[10%] p-[35px] w-[100%] border-b-2 absolute'>
      <li>
            <Link to="/">
              <img src="src/assets/logo.png" alt="" className='w-[200px]' />
            </Link>
        </li>
      <Drawer/>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li className='flex'>
          <TextField id="outlined-basic" className='w-[400px]' placeholder='название товара или артикул' />
      <Button sx={{bgcolor:"orange",color:"black",":hover":{
        bgcolor:"black",
        color:"white"
      }}}>
      <SearchIcon />
      </Button>
        </li>
        <li>
          <Link>
          <button>
            <PlaceIcon/>
            <h1>душанбе</h1>
          </button>
          </Link>
        </li>
        <li>
          <Link>
          <button>
            <PersonIcon/>
            <h1>войти</h1>
          </button>
          </Link>
        </li>
        <li>
          <Link>
          <button>
            <ShoppingCartOutlinedIcon/>
            <h1>корзина</h1>
          </button>
          </Link>
        </li>
       
      </ul>
      </div>

      <Outlet /><br /><br /><br /><br /><br /><br />

      <div className='bg-black px-[10%] py-[40px]'>
          <div className='flex justify-between text-white py-[40px] border-b-2'>
            <ul>
              <li>Телефоны справочной службы</li>
              <li>900</li>
              <li>+992 48-888-1111</li>
              <li>@alifshop_tj</li>
            </ul>
            <ul>
              <li>Каталог товаров</li>
              <li>Смартфоны</li>
              <li>Телевизоры</li>
            </ul>
            <ul>
              <li>Стиральные машины</li>
              <li>Кондиционеры</li>
            </ul>
            <ul>
              <li>Мы в соцмедиа</li>
              <li>naibrvrvu bliaerb</li>
            </ul>
          </div>
          <div className='flex justify-between text-white py-[40px]'>
            <h1>© 2023 ОАО «Алиф Банк». г. Душанбе, 101 мкр-н, ул. Багаутдинова, 9</h1>
            <button>support@alif.tj</button>
          </div>
      </div>
   </div>
  )
}

export default Layout
