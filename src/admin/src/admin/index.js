import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { ProductManager, ProductChoose } from './drinkManager';
import { ToppingManager, ToppingChoose } from './toppingsManager';
import { OrderList, OrderShow, OrderEdit } from './orderManager';
import { FlashSaleList, FlashSaleShow, FlashSaleEdit, FlashSaleCreate } from './flashSaleManager';

import dataProvider from '../api/dataProvider.js';
// import customProvider from './mockOrdersDataProvider'; // tạm để hiện order (chưa có be), sau dùng cái trên

import { MyLayout } from '../auth/layout'; 
import { ProfilePage } from '../auth/profile';
import authProvider from '../auth/authProvider';


const AdminApp = () => {
    const rawShopId = localStorage.getItem("shopId");
    const shopId = rawShopId && rawShopId !== "null" ? rawShopId : null;

    const resources = shopId
        ? [
            <Resource key="order" name="order" list={OrderList} show={OrderShow} edit={OrderEdit} />,
            <Resource key="product" name="product" list={() => <ProductManager shopId={shopId} />} />,
            <Resource key="topping" name="topping" list={() => <ToppingManager shopId={shopId} />} />,
            <Resource key="flashsale" name="flashsale" list={FlashSaleList} show={FlashSaleShow} create={FlashSaleCreate} edit={FlashSaleEdit} />

          ]
      : [];

    return (
        <Admin dataProvider={dataProvider} authProvider={authProvider} layout={MyLayout} >
            {resources}

            <CustomRoutes>
                <Route path="/profile" element={<ProfilePage />} />

                {!shopId && (
                    <Route path="/" element={
                        <Box p={4}>
                            <Typography variant="h5">
                                Bạn chưa quản lý chi nhánh nào.
                            </Typography>
                        </Box>
                    }
                    />
                )}

                {shopId && (
                    <>
                        <Route path="/product-choose" element={<ProductChoose shopId={shopId} />} />
                        <Route path="/topping-choose" element={<ToppingChoose shopId={shopId} />} />
                    </>
                )}
            </CustomRoutes>
        </Admin>
    );
};

export default AdminApp;
