<template>
	<nav class="navbar navbar-expand navbar-dark bg-dark">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<router-link to="/scheduling" class="navbar-brand navbar-text">Scheduling</router-link>
		<div class="collapse navbar-collapse">
			<ul class="navbar-nav">
				<li class="nav-item active">
					<router-link to="/scheduling/sites">Sites</router-link>
				</li>
				<li class="nav-item">
					Clients
				</li>
			</ul>
		</div>
	</nav>
</template>

<script lang='ts'>

</script>