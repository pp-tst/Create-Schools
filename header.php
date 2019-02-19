<?php
/**
 * Header
 *
 * @package BBSB
 **/
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js" data-path="<?php echo esc_url( get_template_directory_uri() ); ?>" itemscope itemtype="http://schema.org/WebPage">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<?php wp_head(); ?>
	</head>

	<body class="<?php the_body_class_index( 'main-menu' ); ?>">
	  <div class="outer">
		<header class="header">
		  <div class="page-wrap header-container">
			<div class="brand white h-brand">
			  <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/img/bbsb-logo-white.svg" class="bbsb-logo-white">
			</div>
			<div class="donate h-donate">
			  <a class="btn btn-donate" href="">Jetzt spenden</a>
			</div>
			<nav class="meta-nav h-meta" role="navigation" aria-label="Metanavigation">
				<ul id="meta-menu">
					<li>
						<a href="">
							<i class="s-icon">
								<svg role="img" class="symbol" aria-hidden="true" focusable="false">
									<use xlink:href="<?php echo esc_url( get_template_directory_uri() ); ?>/img/icons.svg#icon-phone"></use>
								</svg>
								</i>
							</a>
					</li>
					<li>
						<a href="">
								<i class="s-icon">
								<svg role="img" class="symbol" aria-hidden="true" focusable="false">
									<use xlink:href="<?php echo esc_url( get_template_directory_uri() ); ?>/img/icons.svg#icon-mail"></use>
								</svg>
							</i>
							</a>
					</li>
					<li>
						<a href="">
								<i class="s-icon">
								<svg role="img" class="symbol" aria-hidden="true" focusable="false">
									<use xlink:href="<?php echo esc_url( get_template_directory_uri() ); ?>/img/icons.svg#icon-at"></use>
								</svg>
							</i>
							</a>
					</li>
				</ul>
			</nav>
			<div class="search h-search">
			  <a href="">
					<i class="s-icon">
				  <svg role="img" class="symbol" aria-hidden="true" focusable="false">
					<use xlink:href="<?php echo esc_url( get_template_directory_uri() ); ?>/img/icons.svg#icon-search"></use>
				  </svg>
				</i>
				</a>
			</div>
					<nav class="main-nav h-main" role="navigation" aria-label="Hauptnavigation">
						<button class="menu-button toggle" data-for="main-menu" title="Menü ein-/ausblenden" aria-haspopup="true" aria-expanded="false">
							<span class="menu-button-label">Menü</span>
							<i class="s-icon">
							<svg role="img" class="symbol" aria-hidden="true" focusable="false"><use xlink:href="<?php echo esc_url( get_template_directory_uri() ); ?>/img/icons.svg#icon-menu"></use></svg></i>
						</button>
				<ul id="main-menu">
								<?php
										wp_nav_menu(
											array(
												'theme_location' => 'main-menu',
												'walker' => new Main_Nav_Walker(),
												'container' => '',
												'items_wrap' => '%3$s',
												'depth'  => 3,
											)
										);
								?>
							</ul>
						</nav>
			</div>
		</header>
