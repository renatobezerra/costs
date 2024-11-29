import { useEffect, useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import styles from './ServiceList.module.css';
import Modal from '../../components/layout/Modal/Modal';

function ServiceList({ projectData }) {

  const [services, setServices] = useState(projectData.services ?? [])
  const [showAddService, setShowAddService] = useState(false);

  useEffect(() => {

  }, [services]);

  function addService(e) {
    e.preventDefault();
    if(projectData?.services) projectData.services = [];
    let service = {
      id: 's5e1',
      name: 'Service 1',
      description: 'This is a service',
      cost: 40
    };
    setServices([...services, service]);
    toogleFormAddService();
  }

  function toogleFormAddService(e) {
    if(e) e.preventDefault();
    setShowAddService(!showAddService);
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
            <h2>Service Form</h2>
          </Modal>
        )
      }

    </div>
  );
}

export default ServiceList;
