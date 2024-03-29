<script>
import {useCatalogStore} from '@/store/catalog'
import {useGlobalStore} from '@/store/global'
import {useRentsStore} from '@/store/rents'
import {storeToRefs} from 'pinia'

import ItemGrid from '@/components/ItemGrid'
import ItemCardUser from '@/components/ItemCardUser'
import ItemCardAdmin from '@/components/ItemCardAdmin'

export default {
    name: 'Catalog',
    components: {
      ItemGrid,
      ItemCardUser,
      ItemCardAdmin
    },
    async mounted() {
      const catalog = useCatalogStore()
      await catalog.fetchItems()
    },
    setup() {
      const catalog = useCatalogStore()
      const global = useGlobalStore()
      const rents = useRentsStore()

      const {
        isUserAdmin
      } = storeToRefs(global)

      const {
        getItems,
        getAllCategories,
      } = storeToRefs(catalog)

      const {
        fetchItems,
        setCatalogItems,
        checkCategoryById,
        setCategoryFilters,
        editCatalogItem,
        deleteCatalogItem
      } = catalog

      const {
        addToCart
      } = rents

      return {
        getItems,
        addToCart,
        fetchItems,
        isUserAdmin,
        getAllCategories,
        setCategoryFilters,
        setCatalogItems,
        editCatalogItem,
        deleteCatalogItem,
        checkCategoryById
      }
    }
}
</script>

<template>
  <div class="catalog container">
    <div class="content">
      <section>
        <h1>Фильтр по категориям</h1>
        <button-checker
          :options="getAllCategories"
          @checked="setCategoryFilters"
        />
      </section>
      <section id="items-catalog">
        <h1>Каталог товаров</h1>
        <item-grid @itemAdd="addToCart">
          <template #item-list v-if="isUserAdmin">
            <item-card-admin
              v-for="item in getItems"
              :key="'item-card-' + item.id"
              :item="item"
              @itemAdd="addToCart"
              @editItem="editCatalogItem"
              @deleteItem="deleteCatalogItem"/>
          </template>
          <template #item-list v-else>
            <item-card-user
              v-for="item in getItems"
              :key="'item-card-' + item.id"
              :item="item"
              @itemAdd="addToCart"/>
          </template>
        </item-grid>
      </section>
    </div>
  </div>
</template>

<style scoped>
  .button-checker {
    margin-bottom: -20px;
  }
</style>
