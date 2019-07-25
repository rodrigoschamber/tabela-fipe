import React from "react";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getBrandList, getModelList,getYearList, getVehicle,
    resetBrandList, resetModelList, resetYearList, resetVehicle, } from '../actions/index';
import fipeImg from '../assets/image/fipe.png'

class SearchPage extends React.Component {
    state={
        dialogOpen: false,
        resultOpen: false,
        tipo: "Tipo",
        marca: "Marca",
        modelo: "Modelo",
        ano: "Ano",
        veiculo: "Veículo",
        typeId: "",
        brandId: "",
        modelId: "",
        yearId: "",
    }
    changeTypePick = (event) => {    
        this.props.dispatch(getBrandList(event.target.value))
        this.props.dispatch(resetModelList(0))
        this.props.dispatch(resetYearList(0))
        this.setState({typeId: event.target.value})
        //this.setState({tipo: event.target.name})
        //console.log(event)
    }
    changeBrandPick = (id) => {    
        this.props.dispatch(getModelList(this.state.typeId, id))
        this.props.dispatch(resetYearList(0))
        this.setState({brandId: id})
    }
    changeModelPick = (id) => {    
        this.props.dispatch(getYearList(this.state.typeId, this.state.brandId, id))
        this.setState({modelId: id})
    }
    changeYearPick = (id) => {    
        this.props.dispatch(getModelList(this.state.typeId, this.state.brandId, this.state.modelId,id))
        this.setState({yearId: id})
    }
    submitData = (type, brand, model, year) => {
        this.props.dispatch(getVehicle(type, brand, model, year))
        this.setState({dialogOpen:false})
    }
    render(){
        const classes =  makeStyles(theme => ({
            button: {
                margin: theme.spacing(1),
              },
            root: {
                padding: theme.spacing(3, 2),
            },
            formControl: {
              margin: theme.spacing(1),
              minWidth: 120,
            },
            selectEmpty: {
              marginTop: theme.spacing(2),
            },
          }));
        return (
            <Box>
                <Box
                    color="text.hint"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Box
                        display="flex"
                        justifyContent="center"
                        m={0}
                    >
                        <img
                            alt={"fipe"}
                            className="img.fipe"
                            src={fipeImg}
                            width="10%"
                        />
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        m={1}
                    >
                        <Box
                            display="flex"
                            justifyContent="center"
                        >
                            {(this.state.resultOpen === true && this.props.vehicle.CodigoFipe)
                            ? <div>
                                <Typography variant="h5" component="h5" gutterBottom>
                                    {`
                                        ${this.props.vehicle.Marca} ${this.props.vehicle.Modelo}
                                    `}
                                </Typography>
                                <Typography variant="h6" component="h6" gutterBottom>
                                    {`
                                        Ano/Combustível: ${this.props.vehicle.AnoModelo} ${this.props.vehicle.Combustivel}
                                    `}
                                </Typography>
                                <Typography variant="h6" component="h6" gutterBottom>
                                    {`
                                        Referência: ${this.props.vehicle.MesReferencia}
                                    `}
                                </Typography>
                                <Typography variant="h6" component="h6" gutterBottom>
                                    {`
                                        Código FIPE: ${this.props.vehicle.CodigoFipe}
                                    `}
                                </Typography>
                                <Typography variant="h5" component="h5" gutterBottom>
                                    {`
                                        ${this.props.vehicle.Valor}
                                    `}
                                </Typography>
                            </div>
                            : null
                            }
                        </Box>
                    </Box>
                    <Box 
                        display="flex"
                        justifyContent="center"
                        m={2}
                    >
                        <Box mr={1}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            className={classes.button}
                            onClick={() => {
                                this.setState({dialogOpen:true})
                                this.setState({resultOpen: false})
                            }}
                        >
                            Busca
                        </Button>
                        </Box>
                        <Box ml={1}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            className={classes.button}
                            onClick={() => {
                                this.props.dispatch(resetBrandList(0))
                                this.props.dispatch(resetModelList(0))
                                this.props.dispatch(resetYearList(0))
                                this.props.dispatch(resetVehicle(0))
                            }}
                        >
                            Limpar
                        </Button>
                        </Box>
                    </Box>
                </Box>
                <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={this.state.dialogOpen}
                    onClose={()=>this.setState({dialogOpen:false})}
                >
                    <DialogTitle>Tabela FIPE</DialogTitle>
                    <DialogContent>
                    <form className={classes.root}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="inputTipo">Tipo</InputLabel>
                            <Select
                                value={this.state.tipo}
                                onChange={
                                    (event) => this.changeTypePick(event/*.target.value*/)
                                }
                                inputProps={{
                                    name: 'Tipo',
                                    id: 'inputTipo',
                                }}
                            >
                                <MenuItem value={"carros"} name={"Carros"}>Carros</MenuItem>
                                <MenuItem value={"motos"} name={"Motos"}>Motos</MenuItem>
                                <MenuItem value={"caminhoes"} name={"Caminhões"}>Caminhões</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="brand">Marca</InputLabel>
                        <Select
                            value={this.state.marca}
                            onChange={
                                (event) => this.changeBrandPick(event.target.value)
                            }
                            input={<Input id="brand" />}
                        >
                            {
                                (this.props.brands.length > 0)
                                    ? this.props.brands.map((item)=>(
                                        <MenuItem
                                            key={item.codigo}
                                            value={item.codigo}
                                        >
                                            {item.nome}
                                        </MenuItem>))
                                    : null
                            }
                        </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="model">Modelo</InputLabel>
                        <Select
                            value={this.state.modelo}
                            onChange={
                                (event) => this.changeModelPick(event.target.value)
                            }
                            input={<Input id="model" />}
                        >
                            {
                                (this.props.models.length > 0)
                                    ? this.props.models.map((item)=>(
                                        <MenuItem
                                            key={item.codigo}
                                            value={item.codigo}
                                        >
                                            {item.nome}
                                        </MenuItem>))
                                    : null
                            }
                        </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="year">Ano</InputLabel>
                        <Select
                            value={this.state.ano}
                            onChange={
                                (event) => this.changeYearPick(event.target.value)
                            }
                            input={<Input id="year" />}
                        >
                            {
                                (this.props.years.length > 0)
                                    ? this.props.years.map((item)=>(
                                        <MenuItem
                                            key={item.codigo}
                                            value={item.codigo}
                                        >
                                            {item.nome}
                                        </MenuItem>))
                                    : null
                            }
                        </Select>
                        </FormControl>
                    </form>
                    </DialogContent>
                    <DialogActions>
                    <Button
                        onClick={() => {
                            this.submitData(
                                this.state.typeId,
                                this.state.brandId,
                                this.state.modelId,
                                this.state.yearId
                            )
                            this.setState({resultOpen: true})
                        }}
                        color="primary"
                    >
                        Pesquisar
                    </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        )
    }
}
function mapStateToProps(toProps){
    return toProps
}

export default connect(mapStateToProps)(SearchPage);