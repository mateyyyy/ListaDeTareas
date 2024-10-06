import React from 'react'

export default function AddForm({add}) {
  return (
    <div id={styles.PrinDivProject}>
        <div id={styles.add}><button onClick={() => (setShowForm(!showForm))}>ADD TASK</button></div>

        {showForm? <div id={styles.formContainer}>
          <h2>TASK</h2>
          <form action="" id={styles.form} onSubmit={(e) => (addTask(e))}>
            {showError? <h3>Error : {errMessage}</h3>: null}
            <input type="text" className={styles.input} placeholder='Nombre' value={name}  onChange={(e) => setName(e.target.value)}/>
            <input type="text" className={styles.input} placeholder='Descripcion' value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="text" className={styles.input} placeholder='Fecha limite' value={due}  onChange={(e) => setDue(e.target.value)}/>
            <button>ADD</button>
          </form>
        </div>: null}
    </div>
  )
}
