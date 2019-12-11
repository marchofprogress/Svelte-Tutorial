<script>
    export let displayName;
    export let photoURL;
    export let uid;
</script>

<style>
    *{
        padding: 5px;
    }
</style>


<h3>Hi { displayName }!</h3>

<img src={ photoURL } width="100" alt="user avatar">
<p>Your userID is { uid }</p>
