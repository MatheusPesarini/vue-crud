<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center">Lista de Itens</h2>

    <button @click="$emit('toggleTheme')" class="btn btn-secondary mb-4">
      <font-awesome-icon :icon="$root.theme === 'light' ? ['fas', 'moon'] : ['fas', 'sun']" />
    </button>
    
    <form @submit.prevent="addItem" class="form-inline justify-content-center mb-4">
      <div class="form-group mr-2">
        <input v-model="newItem.name" placeholder="Adicione um item" class="form-control" style="width: 300px" maxlength="50"/>
      </div>
      <button type="submit" class="btn btn-primary" style="margin-left: 5px">Adicionar</button>
    </form>

    <ul class="list-group" :class="$root.theme">
      <li v-for="(item, index) in items" :key="index" class="list-group-item d-flex justify-content-between align-items-center" style="margin: 0 auto; width: 800px">
        <span class="lead">{{ item.name }}</span>
        <div>
          <button @click="toggleCompletion(index)" class="btn btn-sm" :class="item.completed ? 'btn-success' : 'btn-warning'">
            {{ item.completed ? 'Completo' : 'Andamento' }}
          </button>
          <button @click="editItem(index)" class="btn btn-warning btn-sm mr-2" style="margin-left: 5px">Editar</button>
          <button @click="deleteItem(index)" class="btn btn-danger btn-sm" style="margin-left: 5px">Deletar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: {
        name: '',
        completed: false
      },
      items: [],
    };
  },
  methods: {
    addItem() {
      if (this.newItem.name !== '') {
        this.items.push({ name: this.newItem.name, completed: false });
        this.newItem.name = '';
        localStorage.setItem('items', JSON.stringify(this.items));
      }
    },
    toggleCompletion(index) {
      this.items[index].completed = !this.items[index].completed;
      localStorage.setItem('items', JSON.stringify(this.items));
    },
    editItem(index) {
      this.newItem.name = this.items[index].name;
      this.deleteItem(index);
    },
    deleteItem(index) {
      this.items.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(this.items));
    }
  },
  created() {
    this.items = JSON.parse(localStorage.getItem('items')) || [];
  }
};
</script>

<style scoped>
  .container {
    max-width: 800px;
  }

  .form-inline {
    display: flex;
    justify-content: center;
  }

  .list-group-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .lead {
    margin-bottom: 0;
    font-size: 1.30rem;
    font-weight: 300;
  }

  .light .list-group-item {
    background-color: #f0f0f0;
    color: #000;
  }

  .dark .list-group-item {
    background-color: #202129;
    color: #fff;
  }
  .light input {
    background-color: #f0f0f0;
    color: #000;
  }

  .dark input {
    background-color: #202129;
    color: #fff;
  }
  .light input::placeholder {
    color: #000;
  }

  .dark input::placeholder {
    color: #fff;
  }
</style>