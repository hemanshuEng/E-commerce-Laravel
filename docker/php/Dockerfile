ARG VERSION="7.4"

FROM php:${VERSION}-fpm-buster
ARG USER_ID=1000
ARG GROUP_ID=1000

COPY  .  /var/www/


RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libzip-dev \
    libxml2-dev \
    curl \
    wget \
    git \
    unzip \
    vim
# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd mysqli pdo_mysql zip  intl

#install xedebug
RUN pecl install xdebug && docker-php-ext-enable xdebug

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


# Install Nodejs
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

WORKDIR /var/www/

#Only use in producation
#RUN composer install
#RUN npm install
#RUN npm run prod

RUN addgroup --gid $GROUP_ID user
RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user

RUN chown -R user:user /var/www
USER user

EXPOSE 9000

CMD ["php-fpm"]
