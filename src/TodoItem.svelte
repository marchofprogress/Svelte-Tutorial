<script>

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function remove() {
        dispatch('remove', { id });
    }

    function toggleStatus() {
        let newStatus = !complete;
        dispatch('toggle', {
            id,
            newStatus
        });
    }


    export let id; // document ID
    export let text;
    export let complete;
</script>

<style>
    .is-complete {
        text-decoration: line-through;
        color: green;
    }

    li {
        margin: 5px;
        display: grid;
        grid-template-columns: 3fr 1fr 1fr;
        max-width: 400px;

    }

    text {
        display: flex;
        align-items: center;
    }

    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>


<li>

    {#if complete}
        <span title={text} class="is-complete">{ text }</span>
        <button on:click={toggleStatus}> ✔️ </button>
    {:else}
        <span title={text} class="text">{ text }</span>
        <button on:click={toggleStatus}> ❌ </button>
    {/if}

    <button on:click={remove}> 🗑 </button>

</li>
