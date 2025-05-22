import Input from '../form/Input'
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {
  return (
    <form className={styles.form}>
      <Input 
      
      type="text" 
      text="Nome do projeto" 
      name="name" 
      placeholder="Insira o nome do projeto">

      </Input>
      <Input 
      
      type="numbere" 
      text="Nome do projeto" 
      name="budget" 
      placeholder="Insira o orçamento total">

      </Input>
      
      <Select
        name="Category_id" 
        text="Selecione a caregoria"
      ></Select>
      <SubmitButton text={btnText}></SubmitButton>
    </form>
  );
}

export default ProjectForm;
