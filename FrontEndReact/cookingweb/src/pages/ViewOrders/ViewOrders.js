import React, { useEffect, useState, useContext } from "react";
import { getallByUser, getOrderById, cancelOrder } from '../../services/orders.services';
import CustomTable from "../../components/Table/Table";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, ButtonGroup } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "./styles";
import { StyledTableCell } from "../../components/Table/styles";
import IconButton from "@mui/material/IconButton";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Navbar from '../Navbar';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom'

export const ViewOrders = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    const [pedidos, setPedidos] = useState([]);
    const [searchCode, setSearchCode] = useState("");
    const [filteredPedidos, setFilteredPedidos] = useState([]);
    const navigate = useNavigate();

    async function fetchPedidos() {
        try {
            let response;

            if(searchCode)
            {                
                response = [await getOrderById({searchCode})]
            }
            else
            {
                response = await getallByUser();
            }
            setPedidos(response);
            setFilteredPedidos(response);            
        } catch (error) {
            console.error('Erro ao buscar pedidos:', error);
        }
    }

    useEffect(() => {
        if (!isLoggedIn)
        {
            navigate("/Login");
        }
    }, []);

    const handleSearch = () => {
        fetchPedidos();
    }

    const columns = [
        { field: "id", headerName: "Pedido ID", align: "left", type: "string" },
        { field: "orderingDate", headerName: "Criado em", align: "right", type: "dateTime" },
        { field: "statusOrder", headerName: "Status", align: "right", type: "number" },
        { field: "totalValue", headerName: "Total", align: "right", type: "money" },
    ];

    const acoes = (open, setOpen) => {
        return (
            <StyledTableCell align="right">
                <IconButton
                    aria-label="expand row"
                    size="small"
                    color="primary"
                    onClick={() => setOpen(!open)}
                >
                    Ver
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </StyledTableCell>
        )
    }

    const LineCollapsable = (row, open, setOpen) => {

        const handleCancelOrder = async (event) => {
            event.preventDefault();
            var confirmed = window.confirm("Tem certeza de que deseja CANCELAR pedido?");
            if (confirmed){
                const response = await cancelOrder(row.id);
               if (response.status === 200) {
                 fetchPedidos();
                 alert('Pedido cancelado!');
               }
            }
          };

        return (
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                    <div style={{ margin: 10 }}>
                        <Typography variant="h5" gutterBottom component="div">
                            Produtos do pedido
                        </Typography>
                        <ul>                             
                            {row.products.map((product) => (                                
                                <li 
                                    key={product.id}>
                                    <img src={`img/${product.name.replace(/ /g, '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.png`} alt={product.name} width={100} height={100} />
                                    {product.name} - {product.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })} - {product.quantity} {product.quantity === 1 ? 'item' : 'itens'}</li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ margin: 10 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Total do pedido
                        </Typography>
                        <h1>{row.totalValue.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                        </h1>                        
                    </div>

                    <div style={{ margin: 10 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            
                        </Typography>
                        <ButtonGroup>
                            <Button variant="contained" 
                                style={{ backgroundColor: 'red' }} 
                                onClick={handleCancelOrder}
                                disabled={row.statusOrder != 'Aguardando inicio'}
                            >
                            <ClearIcon />
                               Cancelar
                            </Button>
                        </ButtonGroup>
                    </div>                    
                </Box>
            </Collapse>
        )
    }

    return (
        <Container>            
            <div>
                <Navbar />
            </div>
            <div style={{ backgroundColor: 'white', padding: '14px', border: '1px solid black', width: '100%' }}>
                <h2 style={{ margin: 0 }}>Meus Pedidos</h2>

                {/* Pesquisa do pedido pelo id */}
                <TextField style={{ backgroundColor: 'white',  width: '200px',  height: '20px'}}
                    label="Código do pedido"
                    value={searchCode}
                    onChange={(e) => setSearchCode(e.target.value)}
                    variant="outlined"
                />
                
                <Button 
                    variant="contained" 
                    onClick={handleSearch} 
                    style={{ backgroundImage: `url(${'/img/lupa.png'})`, 
                    backgroundSize: 'cover',
                    padding: '27px',
                    minWidth: 'auto'}}>
                     
                </Button>
            </div>

            {pedidos && pedidos.length === 0 ? (
                <p style={{ backgroundColor: 'white' }}>Nenhum pedido encontrado</p>
            ) : (
                <CustomTable
                    columns={columns}
                    rows={filteredPedidos}
                    acoes={acoes}
                    lineCollapsable={LineCollapsable}
                />
            )}            
        </Container>
    );
};