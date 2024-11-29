import { v4 as uuidv4  } from 'uuid';
import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import styles from './ServiceList.module.css';
import Modal from '../../components/layout/Modal/Modal';
import ServiceForm from './ServiceForm';

function ServiceList({ projectData }) {
  const [services, setServices] = useState(projectData.services ?? [])
  const [service, setService] = useState({});
  const [showAddService, setShowAddService] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState('');

  function handleChangeService(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  function addService(e) {
    e.preventDefault();

    if(!validService(service)) {
      setFormErrorMessage('Invalid services infos');
      return;
    }

    let validCostsMessage = validCosts(service);
    if(!!validCostsMessage) {
      setFormErrorMessage(validCostsMessage);
      return;
    }

    if(projectData?.services) projectData.services = [];
    service.id = uuidv4();
    service.cost = parseFloat(service.cost);
    setServices([...services, service]);
    setService({});
    toogleFormAddService();
  }

  function toogleFormAddService(e) {
    if(e) e.preventDefault();
    setShowAddService(!showAddService);
    setFormErrorMessage('');
  }

  function validService(_service) {
    let result = true;
    if((_service?.name?.trim() ?? '') === '') {
      result = false;
    }

    if((_service?.cost?.trim() ?? '') === '') {
      result = false;
    }

    return result;
  }

  function validCosts(_service) {
    let totalCost = services.reduce((acc, s) => {
      acc+= s.cost;
      return acc;
    }, 0);

    if(totalCost + _service.cost > projectData.budget) {
      return `Budget exceeded in $${(totalCost + _service.cost) - projectData.budget}`;
    }

    return;
  }

  return (
    <div className={styles.serviceListContainer}>
      <div className={styles.action}>
        <h2>Services</h2>
        <button type="button" className={styles.default} onClick={toogleFormAddService} ><BsPlus /> Add Service</button>
      </div>
      <hr/>
      <p>Items</p>
      {
        services?.length > 0 ? (
          services?.map(s => ( <p key={s.id}>{ s.name }</p> ))
        ) : (
          <p>No items :(</p>
        )
      }

      {
        showAddService && (
          <Modal headerText="Add Service" cancelText="Cancel" confirmHandler={addService} cancelHandler={toogleFormAddService}>
            <ServiceForm handleChange={handleChangeService} errorMessage={formErrorMessage} />
          </Modal>
        )
      }

    </div>
  );
}

export default ServiceList;
