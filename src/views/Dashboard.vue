<script setup lang="ts"></script>

<template>
    <div class="dashboard-box">
        <div class="dashboard-cards">
            <div class="dashboard-card">
                <div class="card-heading">
                    <p>Monitors</p>
                </div>
                <div class="card-body">
                    <p>random data</p>
                </div>
            </div>
            <div class="dashboard-card">
                <div class="card-heading">
                    <p>Monitors</p>
                </div>
                <div class="card-body">
                    <p>random data</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dashboard-box {
}

.dashboard-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.dashboard-card {
    border: 1px solid var(--bg-tertiary);
    border-radius: 8px;
    margin: 20px;
}

.card-heading {
    padding: 10px 0 10px 10px;
    width: 300px;
}

.card-body {
    background-color: var(--bg-secondary);
    padding: 10px 0 10px 10px;
    width: 300px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
</style>
